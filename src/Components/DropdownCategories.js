import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import '../CSS-Files/Dropdown.css'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function Example() {

  const [{ category },dispatch] = useStateValue();

  function setCategoryFun(cat){
    dispatch({
      type: 'SET_CATEGORY',
      category: cat
    })
  }
    
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="dropdownCategories">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{(category?.charAt(0).toUpperCase() + category?.slice(1))?(category?.charAt(0).toUpperCase() + category?.slice(1)):"ALL"}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Categories</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => setCategoryFun("ALL")} >ALL</DropdownItem>
          <DropdownItem onClick={() => setCategoryFun("men's clothing")} >Men's Clothing</DropdownItem>
          <DropdownItem onClick={() => setCategoryFun("jewelery")} >Jewelery</DropdownItem>
          <DropdownItem onClick={() => setCategoryFun("electronics")} >Electronics</DropdownItem>
          <DropdownItem onClick={() => setCategoryFun("women's clothing")} >Women's Clothing</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}


export default Example;