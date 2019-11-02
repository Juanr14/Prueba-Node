
import { logger } from '@shared';
import { Request, Response, Router, Express } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';
import { operateArray } from '@shared';

// Init shared
const router = Router();

/******************************************************************************
 *                       Operar arreglo - "POST /test"
 ******************************************************************************/

router.post('/', async (req: Request, res: Response) => {
    try {
        const { data } = req.body;
        if (!data) {
            return res.status(422).json(
                {
                    response: {
                        data: '',
                        errors: ['invalid_data_format'],
                    },
                },
            );

        }

        const result = operateArray(data);

        if (result.error) {

            return res.status(422).json({response : {
                data: '',
                errors: result.error,
            }});
        } else {
            return res.status(OK).json({response: {
                data: result,
                errors: [],
            }});
        }

    } catch (err) {
        logger.error(err.message, err);
        return res.status(500).json(
            {
                response: {
                    data: '',
                    errors: ['internal_server_error'],
                },
            },

        );
    }
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
