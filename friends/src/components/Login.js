import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault()
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/friends')
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>
                        {this.props.isLoggingIn ? (
                            'Loading...'
                        ) : (
                                'Log in'
                            )}
                    </button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
})

export default connect(mapStateToProps, { login })(Login);