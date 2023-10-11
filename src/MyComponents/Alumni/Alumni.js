import './Alumni.module.css'; 
import AlumniCard from './Card';
const Alumni = () => {
    return ( 
        <div className="alumni">
            <p className="page">This is Alumni Page</p>
            <div className="alumnicard">
                <AlumniCard/>
            </div>
        </div>
     );
}
 
export default Alumni;