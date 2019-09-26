import React from 'react';

const Things = ({ things })=> {
        return (
          <ul>
            {
              things.map(thing => <li key={ thing.id}>{ thing.name}</li>)
            }
          </ul>
        );
      };
