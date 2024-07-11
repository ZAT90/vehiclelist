import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomePage';
import VehicleList from './pages/VehicleListPage';
export const Routings = () => {
    return (
        <Router>
            {/* <Switch> */}
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/vehicles' element={<VehicleList />} />
            </Routes>
            {/* </Switch> */}
        </Router>
    )
}