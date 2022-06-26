import users from '../../users/index'

export default function data (req, res) {
    res.status(200).json(users)
}