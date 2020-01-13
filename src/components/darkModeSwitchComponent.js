import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const DarkSwitch = withStyles(theme => ({
  root: {
    width: 24,
    height: 74,
    padding: 0,
    display: 'flex',
    overflow: 'visible'
  },
  switchBase: {
    padding: 0,
    color: theme.palette.secondary[theme.palette.type],
    backgroundPosition: 'center',
    '&$checked': {
      transform: 'translateY(32px)',
      color: theme.palette.secondary[theme.palette.type],
      '&$checked $thumb': {
        backgroundImage: "url(/images/dark-switch-icon.svg)",
      },
      '& + $track': {
        opacity: 1,
      },
    },
  },
  input: {
    top: '-65%',
    width: '150%',
    height: '230%',
    left: '-25%',
  },
  thumb: {
    borderRadius: '12px',
    width: 24,
    height: 42,
    boxShadow: 'none',
    backgroundImage: "url(/images/light-switch-icon.svg)",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  track: {
    borderRadius: '12px',
    opacity: 1,
    backgroundImage: "url(/images/light-mode-switch.svg)",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  checked: {},
}))(Switch);

export default function DarkModeSwitch({onToggleDark}) {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    onToggleDark()
  };

  return (
      <div className="dark-toggle noSelect">
        <DarkSwitch
            checked={state.checked}
            onChange={handleChange('checked')}
            value="checked"
        />
    </div>
  );
}