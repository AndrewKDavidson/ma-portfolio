import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Carousel from './carouselComponent';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.primary[theme.palette.type],
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  card: {
    backgroundColor: theme.palette.heading[theme.palette.type],
    color: theme.palette.primary[theme.palette.type],
  },
  processButton: {
    backgroundColor: theme.palette.buttonBackground[theme.palette.type],
    color: theme.palette.buttonText[theme.palette.type],
    margin: '12px 0'
  }
}));


const Project = props => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (i) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // content inside the project card 
  const renderProject = () => {
    return (
      <div>
        {props.project ? (
          <Card className={`slide-top ${classes.card}` }>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2" display='inline' style={{marginRight: '20px'}}>
                {props.project.title}
              </Typography>
              <Typography component="p" display='inline'>
                {props.project.description}
              </Typography>
              <Carousel props={props} />
            </CardContent>
            <CardActions style={{justifyContent:'center'}}>
              <Button
                size="small"
                className={classes.processButton}
                target="_blank"
                onClick={() => handleOpen()}
                variant="contained"
                size="medium"
              >
                Process
              </Button>
            </CardActions>
          </Card>
        ) : null}
      </div>
    )
  };

  // content inside the modal goes here
  const renderModal = () => {
    const project = props.project;
    return (
      <div>
        <h2 id="project-modal-title">{project.title}</h2>
        <p id="project-modal-description">{project.description}</p>
      </div>
    );
  }

  return(
    <div>
      {/* render the project */}
      <div>{renderProject()}</div>
      <Modal
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {renderModal()}
          </div>
        </Fade>
      </Modal>
    </div>
  )
};
export default Project;