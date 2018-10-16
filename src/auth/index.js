import router from '../router'
import axios from 'axios'
import store from '../store/store'
import * as types from '../store/modules/users/mutation_types'
import moment from 'moment'
import Vue from 'vue'

export default {
    user: {
        authenticated: false
    },
    login(context, credentials) {
        let inst = this
        store.commit('LOADING')
        axios.post(types.AUTH_BASE_URL, credentials)
            .then(function (response) {
                let expiry_ = response.data.expires_in,
                    expires_in = moment().seconds(expiry_).utc()
                localStorage.setItem('auth_token', response.data.access_token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                localStorage.setItem('token_expiry', expires_in)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token')
                Vue.set(store.state, 'user', response.data.user)
                Vue.set(store.state, 'token_expiry', localStorage.getItem('token_expiry'))
                store.commit('SET_AUTH')
                store.commit('LOADING')
                inst.getUserRoles(response.data.user.id)
            })
            .catch(function (error) {
                store.commit('LOADING')
                context.error = error.message
            })
    },
    logout() {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user')
        localStorage.removeItem('user_roles')
        localStorage.removeItem('token_expiry')
        store.commit('SET_USER', {})
        store.commit('SET_AUTH')
        router.push('login')
    },

    checkAuth() {

        let jwt = localStorage.getItem('auth_token')
        if (jwt) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token')
        }
        return !!jwt
    },

    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
        }
    },
}