// @ts-nocheck
import { camperpinsService } from '../../../services/camperpins-service';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params }) {
    const pin = await camperpinsService.getPin(params.slug)
    //console.log(pin);
    return {
        pin 
    };
}