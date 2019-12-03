import React, { Component } from 'react'
import { Layout } from 'antd';
import LoginHeader from './components/LoginHeader'
import LoginContent from './components/LoginContent'
import LoginFooter from './components/LoginFooter'


const { Header, Footer, Content } = Layout;

class Login extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <LoginHeader />
                    </Header>
                    <Content>
                        <LoginContent />
                    </Content>
                    <Footer>    
                        <LoginFooter />
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Login