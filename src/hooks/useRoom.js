import { useEffect } from "react";
import { useState } from "react";

const useRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [isLoadingRoom, setIsLoadingRoom] = useState(true);
    useEffect(() => {
        fetch('/rooms.json')
            .then(resp => resp.json())
            .then(data => {
                setRooms(data.filter(x => x.type === 'room'));
                setIsLoadingRoom(false);
            })
    }, [])
    return { rooms, setRooms, isLoadingRoom };
}
export default useRoom;