import Joi from "joi";

export const PostCreateValidation = Joi.object({
    content: Joi.string().required()
});
