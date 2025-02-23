import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { CombinedFormDataType } from "../../../yup/schema";
type RevieProps = {
  formState: CombinedFormDataType;
};
const Review = function ({ formState }: RevieProps) {
  return (
    <div className="flex flex-col">
      <div>
        <Typography variant="h5" gutterBottom>
          Student Information
        </Typography>

        <List>
          {/* Student Basic Info */}
          <ListItem>
            <ListItemText primary="Name" secondary={formState.studentName} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Date of Birth"
              secondary={new Date(formState.dob).toLocaleDateString()}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Nationality"
              secondary={formState.nationality}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Gender" secondary={formState.gender} />
          </ListItem>
          <Divider />

          {/* Contact Info */}
          <ListItem>
            <ListItemText primary="Email" secondary={formState.email} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Address" secondary={formState.address} />
          </ListItem>
          <Divider />

          {/* School Info */}
          <ListItem>
            <ListItemText
              primary="School Name"
              secondary={formState.schoolName}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Qualification"
              secondary={formState.qualification}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Graduation Date"
              secondary={new Date(
                formState.graduationDate,
              ).toLocaleDateString()}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Grade" secondary={formState.grade} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="School Address"
              secondary={formState.schoolAddress}
            />
          </ListItem>
          <Divider />

          {/* Course Preferences */}
          <ListItem>
            <ListItemText
              primary="First Course Preference"
              secondary={formState.firstCoursePreference}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Second Course Preference"
              secondary={formState.secondCoursePreference}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Third Course Preference"
              secondary={formState.thirdCoursePreference}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Fourth Course Preference"
              secondary={formState.fourthCoursePreference}
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};
export default Review;
