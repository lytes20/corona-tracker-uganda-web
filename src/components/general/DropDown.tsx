import React, { useState } from 'react';
import { DropDownButton, MenuButton, DropDownList } from '../general';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { ListItem } from '@material-ui/core';

const list = ['Marketing', 'Sales'];
export const DropDown = () => {
  const [displayList, setDisplayList] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <DropDownButton onMouseEnter={() => setDisplayList(true)} onMouseLeave={() => setDisplayList(false)}>
        <span className="item-label">Marketing</span>
        <ExpandMoreIcon style={{ fill: 'white' }} />
      </DropDownButton>
      {displayList && (
        <DropDownList onMouseEnter={() => setDisplayList(true)} onMouseLeave={() => setDisplayList(false)}>
          {list.map((item) => (
            <ListItem key={item} button>
              {item}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </div>
  );
};

interface Props {
  item: string;
}

export const MenuDropDown = (props: Props) => {
  const { item } = props;
  const [displayList, setDisplayList] = useState(false);
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <MenuButton onMouseEnter={() => setDisplayList(true)} onMouseLeave={() => setDisplayList(false)}>
        <span className="item-label">{item}</span>
        <ExpandMoreIcon style={{ fill: 'white' }} />
      </MenuButton>
      {displayList && (
        <DropDownList onMouseEnter={() => setDisplayList(true)} onMouseLeave={() => setDisplayList(false)}>
          {list.map((item) => (
            <ListItem key={item} button>
              {item}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </div>
  );
};
