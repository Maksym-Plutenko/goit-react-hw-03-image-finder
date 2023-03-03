import axios from 'axios';

const apiHandler = {
    key: 'key=33025300-4f56a11ea42b0ad7a58370454',

    async findPictures(request = '', page = 1) {
        const response = await axios.get(`https://pixabay.com/api/?q=${request}&page=${page}&${this.key}&image_type=photo&orientation=horizontal&per_page=12`);
        console.log(request);
        console.log(page);
        console.log(response);
        return response;
    }
}

export {apiHandler};