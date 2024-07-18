import { useState } from "react";
import CardItem from '../Components/Card';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from "react-router-dom";

const HomePage = () => {
    const [selectedName, setSelectedName] = useState('');

    const handleChange = (event) => {
      setSelectedName(event.target.value);
    };
  
    const images = {
      othman: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
      ayoub: 'https://t4.ftcdn.net/jpg/08/48/01/07/360_F_848010715_Jg7WcDS5ZK4PikMJV2vO0GbDIelzuCOZ.jpg',
      amine: 'https://media.istockphoto.com/id/495827884/photo/you-are-the-creator-of-your-own-success.jpg?s=612x612&w=0&k=20&c=85c3fiwXwTIscqx2O00C2P4MIoWLtmyXRCWoQ5LZ1Cw=',
      salma: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
    };
  
    return (
      <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-md">
            <FormControl fullWidth>
              <InputLabel id="pet-select-label">Select a person</InputLabel>
              <Select
                labelId="pet-select-label"
                id="pet-select"
                value={selectedName}
                label="Select a person"
                onChange={handleChange}
              >
                <MenuItem value="">
                  Choose a person
                </MenuItem>
                <MenuItem value="othman">Othmane</MenuItem>
                <MenuItem value="Ayoub">Ayoube</MenuItem>
                <MenuItem value="Amine">Amine</MenuItem>
                <MenuItem value="Salma">Salma</MenuItem>
              </Select>
            </FormControl>
          </div>
          {selectedName && <CardItem name={selectedName} img={images[selectedName.toLowerCase()]}/>}
          
        </div>
  
        <div className='mt-36 text-center '>
          If you have any problems please <Link to={"/contact"} className='text-blue-500'>contact us</Link>
      </div>
      </div>
    );
}

export default HomePage;