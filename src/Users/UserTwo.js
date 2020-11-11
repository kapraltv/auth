import React from 'react'
import { UsersContext } from '../App.js'

const UserTwo = props => (


    <UsersContext.Consumer>

        { (context) => {
            return (
                <div>
                    <h1>{context[1].firstName}</h1>
                    <h2>{context[1].lastName}</h2>
                </div>
            )
          }
        }
    </UsersContext.Consumer>

)

export default UserTwo;