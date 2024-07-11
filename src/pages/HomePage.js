import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


function HomeScreen(params) {
    const navigate = useNavigate();
    return(
        <div>
            <p>this is home</p>
            <Button onClick={()=> navigate('vehicles')} type="link">Vehicle List</Button>
        </div>
    )
}

export default HomeScreen;