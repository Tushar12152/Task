
import { PropTypes } from 'prop-types';
const Title = ({heading}) => {
    return (
        <div>
             <h1 className='text-blue-400 font-bold pb-2 border-b-2 border-blue-400'>{heading}</h1>
        </div>
    );
};

Title.propTypes={
    heading:PropTypes.node,
}

export default Title;