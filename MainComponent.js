import React,{Component} from 'react'
import {View, Text, Button, StyleSheet, Alert, Image} from 'react-native'

class MainComponent extends Component{

    // 멤버변수 - property 
    // Text 컴포넌트가 보여줄 글씨를 가지고 있는 변수
    aaa = "Hello"

    // Component 클래스 안에서 화면 갱신에 영향을 주는 특별한 멤버변수가 이미 존재함.
    // state(상태)
    state={
        msg:"Hello",
        img: require("./image/newyork.jpg")
    }

    render(){

        return(
            <View style={style.root}>
                {/* 이 컴포넌트에 글씨가 만약 변경되어야 한다면 */}
                {/* 이 Text 컴포넌트는 글씨를 직접 쓰지 않고 변수를 만들어 값을 보여주도록 해야만 함. */}
                <Text style={style.plainText}>{this.state.msg}</Text>
                {/* <Button title='button' onPress={clickBtnFunction2}></Button> */}
                {/* 클래스 외부에 함수를 버튼 클릭콜백함수로 사용해도 동작함.  */}
                {/* 하지만, 기본적으로 클래스의 컴포넌트를 외부에서 제어하는 방식은 그리 좋지 않음 */}
                {/* 그래서 가급적 클래스의 콜백함수는 멤버 함수 -> 즉, 메소드로 만드는 것을 권장함 */}
                {/* JS에서는 멤버를 지칭할때 반드시!! this. 키워드가 필요함 */}
                {/* <Button title='button' onPress={this.clickBtn}></Button> */}
                <Button title='button' onPress={this.changeText3}></Button>

                <View style={{marginTop:40}}></View>
                <Button onPress={this.changeImage} title='change image' color="green"></Button>

                <Image style={style.img} source={this.state.img}></Image>
                
            </View>
        )
    }

    // 이미지를 변경하는 기능메소드
    changeImage=()=>{
        // 화면 갱신에 영향을 주는 특별한 변수 state를 변경
        // Image 컴포넌트가 보여주는 이미지 값을 변경
        // state에 여러 멤버 값들이 있더라도 필요한 멤버만 설정하면 됨.
        this.setState({img:require("./image/paris.jpg")})
    }

    // 앞으로 무조건 콜백함수는 멤버로 만들것을 권장
    clickBtn(){
        Alert.alert('clicked button')
    }

    // 버튼 클릭시에 Text 컴포넌트의 글씨를 변경해보기
    changeText(){
        // Text 컴포넌트가 보여주는 값을 가진 aaa 변수값을 변경
        this.aaa="Nice to meet you" // error
        // why? -> 함수도 클래스의 특징을 가지기에 this. 키워드가 이 메소드가 되어버림
        // 우리가 원하는 것은 MainComponent 클래스의 멤버 aaa를 원함.
        
    }

    // 함수는 함수지만 생성자 함수의 성질을 가지지 않는 화살표함수를 클래스 안에서
    // 멤버메소드로 사용할 것을 강하게 권장함!!!!!!
    changeText2= ()=>{
        // 이 화살표 함수 안에서의 this.는 MainComponent 클래스가 됨.
        this.aaa="nice to meet you"
        // 애석하게 변수값을 바꾸어도 화면갱신이 안됨.
        // 모든 멤버변수가 화면갱신에 영향을 주지 않음.
        // 아주 특별한 변수(state)만이 화면갱신에 영향을 줌.
    }

    // 화면 갱신에 영향을 주는 state라는 특별한 변수의 값을 변경
    changeText3=()=>{
        // this.state.msg="Nice to meet you."  // 이렇게 해도 화면갱신 안됨. 에러는 아님.
        // 자동으로 화면갱신이 되려면 state값을 변경하는 기능메소드를 호출해야 함.
        this.setState({msg:"Nice to meet you."})
    }

}// MainComponent Class

// 버튼 클릭시에 발동하도록 지정한 함수 [선언적 함수]
function clickBtnFunction() {
    // 경고창 보이기
    alert('press button')
}

// 익명함수로 콜백함수 만들기
let clickBtnFunction2= function(){
    Alert.alert('press button!!')
}

// 화살표 함수로 콜백함수 만들어보기 
let clickBtnFunction3 = ()=>{
    Alert.alert('press button!!!')
}

// 스타일 객체
const style = StyleSheet.create({
    root:{
        flex: 1,
        padding:16,
    },
    plainText:{
        marginBottom:16,
        fontWeight:'bold',
        color:'black'
    },
    img:{
        marginTop:8,
        flex:1,
        width:null,
        resizeMode:'cover'
    }
})

export default MainComponent