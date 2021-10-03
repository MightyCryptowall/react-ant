import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import SideNav from "../components/layouts/sidebar";
import List from "../components/pages/List";
import FormApp from "../components/pages/Form";
import Videos from "../components/pages/Videos";
import Files from "../components/pages/Files";

const { Sider, Header, Content }  = Layout;

interface ApplicationRoutesProps {
    
}
 
const ApplicationRoutes: React.FC<ApplicationRoutesProps> = () => {
    
    const [collapse, setCollapse] = useState<boolean>();
    useEffect(() => {
        window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
      }, []);
    
    const handleToggle = (event: any) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }

    return ( 
        <Router>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapse}>
                    <SideNav/>
                </Sider>
                <Layout>
                    <Header className="siteLayoutBackground" style={{ padding: 0, background: "#001529"}}>
                        {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: handleToggle,
                            style: {color: "#fff"}
                        })}
                    </Header>
                    <Content style={{ margin: '10px 10px', padding: 24, minHeight: "calc(100vh)", background: "#fff"}}>
                        <Switch>
                            <Route path="/list" component={List} />
                            <Route path="/form" component={FormApp} />
                            <Route path="/files" component={Files} />
                            <Route path="/videos" component={Videos} />
                            <Redirect to="/list" from="/" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
     );
}
 
export default ApplicationRoutes;