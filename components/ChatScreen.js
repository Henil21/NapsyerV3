import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth,db} from "../firebase";
import  Head from "next/head";
import {useRouter} from "next/router";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function ChatScreen(chat,message) {
    const [user]=useAuthState(auth);
    const router =useRouter();
    const showMessage=()=>{
        
    }

    return(
        <Container>
            <Header>
                <Avatar/>
                <HeaderInfo>
                    <h3>Name</h3>
                    <p>Laste seen</p>
                </HeaderInfo>
                <HeaderIcon>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </HeaderIcon>
            </Header>
            <Messagecontainer>
                <Endofmessage/>
            </Messagecontainer>
        </Container>
    );

}
export default ChatScreen;

const Container = styled.div`

`;
const Header = styled.div`
position:sticky;
z-index: 100;
top: 0;
padding: 12px;
display: flex;
align-items: center;
border: 1px solid black;
height:80px;
`;

const HeaderInfo = styled.div`
margin-left:15px;
flex: 1;
 >h3{
     margin-bottom: 3px;
}
>p{
    font-size:14px;
    color: gray;
    /* padding:-5px */
}
`;

const HeaderIcon = styled.div`
`;
const Messagecontainer=styled.div`
`;
const Endofmessage=styled.div`
`;
