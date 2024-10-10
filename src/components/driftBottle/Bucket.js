import './Bucket.css';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa'; // Import icons
import { SiExpress } from 'react-icons/si';

const Bucket = () => {
    return (
        <div className="water">
            <FaReact className="icon react" />
            <FaNodeJs className="icon node" />
            <FaJava className="icon java" />
            <SiExpress className="icon express" />
        </div>
    );
}

export default Bucket;
