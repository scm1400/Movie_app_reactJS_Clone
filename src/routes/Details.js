import React from "react";

// function을 이용해서 만들게되면 새로고침했을때 또는 링크클릭으로 이동하지 않는경우 아무정보 없는 빈페이지가 출력됨
// function Details(props){
//     console.log(props);
//     return <span>hello</span>
// }  


class Details extends React.Component{

    componentDidMount(){
        const { location, history } = this.props;

        if(location.state === undefined)
        {
            history.push("/") //홈으로 리다이렉트
        }
    }
    render(){  // 새로고침 했을때 location이 존재하지않기 때문에 에러가 발생 -> if문으로 처리해줌. 
        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }
        else{
            return null;
        }
       
    }
}

export default Details;