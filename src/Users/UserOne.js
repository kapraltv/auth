import React from 'react'
import { UsersContext } from '../App.js'

const UserOne = props => (

    <UsersContext.Consumer>
        { (context) => {
            return (
                <div>
                    <h1>{context[0].firstName}</h1>
                    <h2>{context[0].lastName}</h2>
                </div>
            )
          }
        }
    </UsersContext.Consumer>

)

export default UserOne;