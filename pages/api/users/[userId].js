import users from "../../users";

export default function handle (req, res) {

    const { userId } = req.query 
    console.log(userId);

    const user = users.find (user => {
        return (
            user.id == userId
        )
    })

    res.status(200).json(user)
}