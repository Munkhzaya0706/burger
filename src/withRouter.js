// import { useNavigate } from 'react-router-dom';

// export const withRouter = (Component) => {
//     const Wrapper = (props) => {
//         const navigate = useNavigate();


//         return (
//             <Component
//                 navigate={ navigate }
//                 lol='ASDAD'
//                 { ...props }
//             />
//         );
//     };

//     return Wrapper;
// };

import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

export default function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                { ...props }
                router={ { location, navigate, params } }
            />
        );
    }
    return ComponentWithRouterProp;
}