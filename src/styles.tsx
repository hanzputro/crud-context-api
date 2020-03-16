import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStylesGlobal = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      padding: '20px'
    },
    paper: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    form: {
      marginBottom: '20px'
    }
  }),
);