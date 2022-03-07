import React from 'react'
import styled from 'styled-components'


interface Props {
onClick?:React.MouseEventHandler<HTMLDivElement> | undefined
}

const Wrapper = styled.div<Props>`
height: 5.6rem;
padding:0 0 0 2rem ;
font-size: 1.4rem;
line-height: 2.4rem;
display:flex;
align-items:center;
width: 77.84%;
margin:auto;
color:var(--white);

.icon{
    color:var(--white);
    width: 1.8rem;
    height:2rem;
    margin-right:2rem;
    /* border: 1px solid white; */

}
`

const NavItem = ({name,iconName,onClick,route}:{name:string,iconName:string,route:string,onClick?:React.MouseEventHandler<HTMLDivElement> | undefined}) => {
    return (
        <Wrapper onClick={onClick} >
            <div className="icon"><img src={iconName} alt="icon" /></div>
            <span >{name}</span>
        </Wrapper>
    )
}

export default NavItem
