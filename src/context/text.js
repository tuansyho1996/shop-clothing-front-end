// components/MenDropdown.js
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import CustomLink from "./link";

const MenDropdown = () => {
  const menu = [
    {
      name: 'men',
      child: [
        {
          name: 'hoodie'
        },
        {
          name: 'shirt'
        },
        {
          name: 'pant'
        }
      ]
    },
    {
      name: 'women',
      child: [
        {
          name: 'hoodie'
        },
        {
          name: 'shirt'
        },
        {
          name: 'pant'
        }
      ]
    }
  ]
  const [nameOpen, setNameOpen] = useState('');
  const handleOpen = (name) => {
    setNameOpen(name)
  }
  const handleClose = () => {
    setNameOpen('')
  }
  console.log('name open', nameOpen)
  return (
    <div className="flex">
      {
        menu?.map((el) => {
          return (
            <div
              className="relative z-10 "
              onMouseOver={() => handleOpen(el.name)}
              onMouseOut={handleClose}
            >
              <CustomLink href="/Men" >
                <span style={{ fontSize: '1rem' }}>{el.name}</span>
              </CustomLink>
              {
                el.name === nameOpen && (
                  <div style={{ minWidth: '200px', left: '50%', transform: 'translateX(-50%)' }} className="absolute  rounded-lg ">
                    <List sx={{ width: '100%', backgroundColor: '#f9f9f9', borderRadius: '0.375rem' }}>
                      {
                        el.child.length > 0 &&
                        el.child.map(item =>
                        (
                          <CustomLink href="#el.name">
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <ImageIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary={item.name} />
                            </ListItem>
                          </CustomLink>
                        )
                        )
                      }
                    </List>
                  </div>
                )
              }
            </div>
          )
        })
      }
    </div>
  );
};

export default MenDropdown;
