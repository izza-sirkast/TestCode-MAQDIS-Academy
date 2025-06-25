const Joi = require('joi');

function validator(schema) {
    return (payload) => {
        if (!payload) {
            throw new Error('input is required');
        }

        return schema.validate(payload, { abortEarly: false });
    }
}

const postSchema = Joi.object({
    data: Joi.number().required(),
});

const deleteByDataSchema = Joi.object({
    data: Joi.number().required(),
});

const deleteSchema = Joi.object({
    id_setoran: Joi.number().required(),
    id_user: Joi.number().required(),
    id_juz: Joi.number().required(),
});

const validatePost = validator(postSchema);
const validateDeleteByData = validator(deleteByDataSchema);
const validateDelete = validator(deleteSchema);

module.exports = {
    validatePost,
    validateDeleteByData,
    validateDelete
};