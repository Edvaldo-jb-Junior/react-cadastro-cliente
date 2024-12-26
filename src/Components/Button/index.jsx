
import PropTypes from "prop-types"
import {Button} from "./style"
/*import ProspTypes from "prop-types"*/

function DefaultButton ({children, theme, ...prosp }){

    return (
        <div>
        <Button {...prosp} theme={theme}>{children}</Button>

        </div>
    )
}

/*DefaultButton.propTypes = { children: PropTypes.node.isRequired }*/

export default DefaultButton 