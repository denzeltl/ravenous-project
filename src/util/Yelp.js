const apiKey = 'ai-Z7BKiqVNdCGQYBw2YLLVKE3aASOOcXpIoUPHAWZC40vvHNMpYB6xaGYDOrRKhkQvXsOLpbZuhx0IU_6-3bzws97ZqLZPkbPalI9uu8OOTZ_nyV6ARJgKoiLrXXnYx';
const yelp = {
    search: (term, location, sortBy) => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            address: '1010 Paddington Way',
                            city: 'Flavortown',
                            state: 'NY',
                            zipCode: '10101',
                            category: 'Italian',
                            rating: 4.5,
                            reviewCount: 90,
                        };
                    });
                }
            });
    },
};

export default yelp;
