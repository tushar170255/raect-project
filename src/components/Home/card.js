import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';

const { Meta } = Card;
function Cardfor (props)
{
    const styles = {

         
        textAlign: 'center',
        backgroundColor:'white'
    }
    return(
          <Card 
          
            hoverable
            style={ {width:260,height:350,backgroundColor:"pink",position:'relative',top:'10pxnpm start'}}
            cover={<img alt="example" src={props.URL} />}
          >
            <Meta title={props.tittle}  description={props.desc} />
          </Card>
          
    
    );
}
export default Cardfor;