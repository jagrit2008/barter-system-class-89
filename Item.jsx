import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity
 } from 'react-native';
import { Icon } from 'react-native-elements';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            full:false
         };
    }
    render() {
        return (
            <TouchableOpacity style={{
                backgroundColor:'#ffffffdd',
                borderRadius:20,
                margin:10,
                padding:15,
            }}
            onPress={()=>{this.setState({full:!this.state.full})}}
            >
                <Text
                style={{fontWeight:'bold'}}
                >{this.props.item.item_name}
                </Text>

                <Text
                style={{fontSize:this.state.full?null:0}}
                >{this.props.item.description}
                </Text>
                

                <Text
                style={{fontWeight:400,marginTop:10}}
                >By : <Text
                style={{fontWeight:200}}
                >{this.props.item.user_id}
                </Text>
                </Text>
               
                <Icon
                name={'cached'}
                reverse
                raised
                color={'#FFAA00'}
                size={15}
                onPress={()=>{console.log("Icon Pressed");this.props.onPress()}}
                />
            </TouchableOpacity>
        );
    }
}

export default Item;