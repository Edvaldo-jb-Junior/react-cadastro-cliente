
import ProspTypes from "prop-types"
import {Button} from "./style"


function DefaultButton ({children, theme, ...prosp }){

    return (
        <div>
            <Button {...prosp} theme={theme}>{children}</Button>

        </div>
    )
}

DefaultButton.propTypes = { 
    children: ProspTypes.node.isRequired,
    theme: ProspTypes.string
}

export default DefaultButton 