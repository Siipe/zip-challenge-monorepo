import moment from 'moment-timezone';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import { ZipCodeType } from 'generated/graphql';

type ResultCardProps = CardProps<'div', { zipCode: ZipCodeType }>;

const ResultCard = ({ zipCode: { country, postCode, places, createdAt }, ...otherProps }: ResultCardProps) => {
  return (
    <Card {...otherProps}>
      <CardHeader
        title={country}
        subheader={
          <>
            <Typography variant="subtitle2" display="flex" alignItems="center" gutterBottom>
              <LocalPostOfficeOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
              {postCode}
            </Typography>
            <Typography variant="subtitle2" display="flex" alignItems="center" color="#1976d2">
              <CalendarMonthOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
              {moment(createdAt).format('llll')}
            </Typography>
          </>
        }
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <List disablePadding>
          {places.map(({ name, state }) => (
            <ListItem key={`${name}-${state}`} disablePadding>
              <ListItemAvatar>
                <Avatar>
                  <ApartmentOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={state} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
