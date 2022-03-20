import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

export default function Navigation(props) {
  return (
    <div role="presentation" className='mb-8'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        {
          props.nav.map(e => {
            return(
              <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href={e.path}
              >
                { e.title }
              </Link>
            )
          })
        }
      </Breadcrumbs>
    </div>
  );
}