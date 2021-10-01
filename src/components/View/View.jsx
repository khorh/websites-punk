import "./View.scss";
import {MdViewList} from "react-icons/md";
import {MdViewModule} from "react-icons/md";

const View = () => {
    return (
        <>
            <p className="view__label"><MdViewList /><MdViewModule /></p>
        </>
    );
};

export default View;