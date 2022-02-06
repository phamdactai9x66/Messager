import React from 'react';
import { db } from '../firebase'
import { collection, onSnapshot, DocumentData, QuerySnapshot, query, orderBy } from 'firebase/firestore'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface ListMessage<T> {

}

const ListMessage: React.FC<ListMessage<any>> = ({ ...props }) => {
    const [ListMessage, setListMessage] = React.useState<any[]>([]);
    const elementScroll = React.useRef<any>(null);
    const ItemList = React.useRef<any>(null);
    const countRenderMessage = React.useRef<any>(0);

    React.useEffect(() => {
        // if (countRenderMessage.current > 1) return;
        // elementScroll.current.scrollTop = ListMessage.length * ItemList.current?.clientHeight;
        // countRenderMessage.current += 1;
        elementScroll.current.scrollTop = ListMessage.length * ItemList.current?.clientHeight;
    }, [ListMessage.length]);


    React.useEffect(() => {
        const Query = query(collection(db, "Messages"), orderBy('createTime', 'asc'))
        onSnapshot(Query, (doc: QuerySnapshot<DocumentData>) => {
            setListMessage(doc.docs.map(e => ({ ...e.data(), id: e.id })))
        }, (err) => {
            console.log(err)
        });
    }, []);
    const renderMessage = (data: any, index: number): JSX.Element | null => {
        if (data == null) return null;
        const { message } = data;
        return <React.Fragment>
            <ListItem alignItems="flex-start" key={index} ref={ItemList}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={message || ''}
                    secondary={
                        <React.Fragment>
                            {"15/10/2001"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    }
    return <React.Fragment>{
        <List sx={{ overflowY: 'auto', maxHeight: 400 }} ref={elementScroll} >
            {ListMessage.map((e, index: number) => {
                return renderMessage(e, index)
            })}


        </List>
    }</React.Fragment>;
};

export default ListMessage;
