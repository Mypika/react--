import React, { Component } from 'react';
import { Layout,Row,Col,Card,Icon} from 'antd';
import '../../index.css'

const { Meta } = Card;
const Meaus = [{
                name:'用户总量',
                icon:'bug'
            },
            {
                name:'留言总量',
                icon:'setting'
            },
            {
                name:'书籍总量',
                icon:'setting'
            },
            {
                name:'系统日志',
                icon:'bug'
            }
        ]
class pagesindex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        }
    }
    render() {
        return (
            <Layout className="Home-ix">
                <Row className="Row-card">
                    {Meaus.map((Item)=>{
                        return <Col span={6} style={{display:'flex',justifyContent:'center'}}>
                            <Card
                                style={{ width: 300 }}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} >
                                <Meta
                                avatar={<Icon type={Item.icon} theme="filled" />}
                                title={Item.name}
                                description="This is the description"
                                />
                            </Card>
                        </Col>
                    })}
                </Row>
          </Layout>
        );
    }
}
 
export default pagesindex;