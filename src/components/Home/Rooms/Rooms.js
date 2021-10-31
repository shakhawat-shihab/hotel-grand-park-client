import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useRoom from '../../../hooks/useRoom';
import RoomCard from '../../RoomCard/RoomCard';

const Rooms = () => {
    // const [room, setRoom] = useState([]);
    // useEffect(() => {
    //     fetch('/rooms.json')
    //         .then(resp => resp.json())
    //         .then(data => setRoom(data))
    // }, [])
    const { rooms, isLoadingRoom } = useRoom();
    // console.log(rooms, isLoadingRoom);
    if (isLoadingRoom) {
        return (
            <div className='mt-5 pt-5 text-center'>
                <Spinner animation='grow'></Spinner>
            </div>
        );
    }
    else {
        return (
            <div className='my-4'>
                <h1 className='text-center'>Our Rooms</h1>
                <Row md={2} lg={3} sm={2} xs={1} className="g-3 m-0">
                    {rooms.map(x => <RoomCard data={x} key={x.id} ></RoomCard>)}
                </Row>
            </div>
        );
    }

};

export default Rooms;