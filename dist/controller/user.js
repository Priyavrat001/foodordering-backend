import { TryCatch } from "../middleware/error.js";
export const createUser = TryCatch(async (req, res, next) => {
    const { name, email, city, auth0Id, addressLine1, country } = req.body;
    let user = await User.findById(auth0Id);
    if ()
        user = await User.create({
            name,
            email,
            city,
            auth0Id,
            addressLine1,
            country
        });
});
