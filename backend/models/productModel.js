import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)

const productSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			trpe: String,
			required: true,
		},
		image: {
			trpe: String,
			required: true,
		},
		brand: {
			trpe: String,
			required: true,
		},
		category: {
			trpe: String,
			required: true,
		},
		description: {
			trpe: String,
			required: true,
		},
		review: [reviewSchema],
		rating: {
			trpe: Number,
			required: true,
			default: 0,
		},
		numReview: {
			trpe: Number,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		countInStock: {
			trpe: Number,
			required: true,
			defualt: 0,
		},
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model('User', productSchema)

export default User
