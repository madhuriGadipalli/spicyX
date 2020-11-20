import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';
import style from './style.css';

export const TabsComponent = React.forwardRef((props, ref) => {
    const { Menu } = ref;
    const [tabs, updateTabs] = useState(['Breakfast', 'Meals', 'Snacks', 'Deserts', 'Drinks']);
    const [active, setActive] = useState({
        activeTab: 0
    });
    useEffect(() => {
        props.fireRequestOnLoad('breakfast');
    }, [])
    const TabClickHandler = (tab, index) => {
        const data = tab.toLowerCase();

        setActive({
            ...active,
            activeTab: index,
            tab: data
        });
        if (!props.tabsData[data]) props.fireRequestOnLoad(data)

    }
    return (
        <Router>
            <div ref={Menu}>
                <div className="title-container">
                    <div className="heading">{'Discover'}</div>
                    <div className="subheading">{'Our Menu'}</div>
                </div>
                <ul className="tabs-header">
                    {tabs.map((tab, index) => {
                        return <li className={`tab-name ${active && active.activeTab == index ? 'active' : ''}`} onClick={() => TabClickHandler(tab, index)}>
                            <Link to={`/${tab}`}>{tab}</Link>
                        </li>
                    })}
                </ul>
                <Switch>
                    <Route exact path="/">
                        <TabContent tabsData={props.tabsData} active={'breakfast'} />
                    </Route>
                    <Route exact path="/Breakfast">
                        <TabContent tabsData={props.tabsData} active={active.tab} />
                    </Route>
                    <Route path="/Meals">
                        <TabContent tabsData={props.tabsData} active={active.tab} />
                    </Route>
                    <Route path="/Snacks">
                        <TabContent tabsData={props.tabsData} active={active.tab} />
                    </Route>
                    <Route path="/Deserts">
                        <TabContent tabsData={props.tabsData} active={active.tab} />
                    </Route>
                    <Route path="/Drinks">
                        <TabContent tabsData={props.tabsData} active={active.tab} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
)

export const TabContent = (props) => {
    const tabsContent = props.tabsData[props.active];
    return (
        tabsContent ?
            <div className="results">
                <Container >
                    <Row>
                        {tabsContent.map((tab, index) => {
                            return (
                                <Col key={index} sm={12} lg={6} md={6}>
                                    <DisplayBlock tab={tab} index={index} />
                                </Col>
                            )
                        })
                        }
                    </Row>
                </Container>
            </div> : null
    )
}

export const DisplayBlock = ({ tab }) => {
    return (
        <div className="menu-container">
            <div className="Image-container">
                <a href={tab.url}>
                    <img src={tab.imgSrc} /></a>
            </div>
            <div className="content">
                <div className="menu-title">
                    {tab.title}
                </div>
                <div className="menu-price">
                    {tab.price}
                </div>
                <div className="menu-desc">
                    {tab.description}
                </div>
            </div>
        </div>
    )
}
