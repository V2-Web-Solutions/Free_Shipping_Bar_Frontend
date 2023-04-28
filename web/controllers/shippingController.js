import { db } from '../models/index.js';

const Shipping = db.shipping;

//Create Shipping
export const addShipping = async (req, res) => {
	// console.log('Request Body: ', req.body)
	try {
		const existingShipping = await Shipping.findOne({
			where: {
				shop_name: req.body.shop_name,
				is_activate: 1,
			},
		});
		if (existingShipping) {
			// If an existing record is found, update its is_activate to 0
			await existingShipping.update({ is_activate: 0 });
		}

		let info = {
			shop_name: req.body.shop_name,
			name: req.body.name,
			free_shipping_goal: req.body.free_shipping_goal,
			message1: req.body.message1,
			message2: req.body.message2,
			message3: req.body.message3,
			message4: req.body.message4,
			message5: req.body.message5,
			add_link_to_bar: req.body.add_link_to_bar,
			link_URL: req.body.link_URL,
			include_close_button: req.body.include_close_button,
			add_progress_bar: req.body.add_progress_bar,
			display_position: req.body.display_position,
			currency: req.body.currency,
			currency_symbol: req.body.currency_symbol,
			currency_symbol_position: req.body.currency_symbol_position,
			background_color: req.body.background_color,
			text_color: req.body.text_color,
			special_text_color: req.body.special_text_color,
			background_color_opacity: req.body.background_color_opacity,
			background_image: req.body.background_image,
			font_family: req.body.font_family,
			font_size: req.body.font_size,
			bar_padding: req.body.bar_padding,
			disappear_after: req.body.disappear_after,
			delay_before_repeating: req.body.delay_before_repeating,
			time_to_fade_in_out: req.body.time_to_fade_in_out,
			display_on_page: req.body.display_on_page,
			exclude_page: req.body.exclude_page,
			device_target: req.body.device_target,
			product_targeting: req.body.product_targeting,
			shipping_fee_exceptions: req.body.shipping_fee_exceptions,
			customer_targeting: req.body.customer_targeting,
			geo_location_target: req.body.geo_location_target,
			exclude_geo_location: req.body.exclude_geo_location,
			display_schedule: req.body.display_schedule,
			custom_code: req.body.custom_code,
			display_page_url: req.body.display_page_url,
			display_page_keyword: req.body.display_page_keyword,
			exclude_page_url: req.body.exclude_page_url,
			exclude_page_keyword: req.body.exclude_page_keyword,
		};
		// console.log("Info===", info);

		const createShipping = await Shipping.create(info);
		if (createShipping) {
			return res.status(200).json({
				success: 1,
				error: 0,
				message: 'Add Successfully ..',
				data: createShipping,
			});
		} else {
			return res.status(200).json({
				success: 0,
				error: 1,
				message: 'Error in creating data.',
				data: [],
			});
		}
	} catch {
		return res.status(400).json({
			success: 0,
			message: 'Error in creating data.........',
			error: 1,
			data: [],
		});
	}
};

//Get AllShipping
export const getShipping = async (req, res) => {
	try {
		const shippingGet = await Shipping.findAll({});
		if (shippingGet) {
			return res.status(200).json({
				success: 1,
				error: 0,
				message: 'Get Successfully ..',
				DemoData: shippingGet,
			});
		} else {
			return res.status(200).json({
				success: 0,
				error: 1,
				message: 'Error in getting data.',
				DemoData: [],
			});
		}
	} catch {
		return res.status(200).json({
			success: 0,
			message: 'Error in getting data...........',
			error: 1,
			DemoData: [],
		});
	}
};

//Get By_id Shipping
export const getByIdShipping = async (req, res) => {
	try {
		const shipping = await Shipping.findOne({
			where: {
				id: req.params.id,
			},
		});

		if (shipping) {
			return res.status(200).json({
				success: 1,
				error: 0,
				message: 'Record found successfully.',
				data: shipping,
			});
		} else {
			return res.status(404).json({
				success: 0,
				error: 1,
				message: 'Record not found.',
				data: [],
			});
		}
	} catch {
		return res.status(400).json({
			success: 0,
			message: 'Error in getting data.',
			error: 1,
			data: [],
		});
	}
};

//Get By_Shop_name Shipping
export const getByShopNameShipping = async (req, res) => {
	try {
		const shop_name = req.headers['x-shop-name'];

		const shipping = await Shipping.findAll({
			where: {
				shop_name: shop_name,
			},
		});

		if (shipping) {
			return res.status(200).json({
				success: 1,
				error: 0,
				message: 'Record found successfully.',
				data: shipping,
			});
		} else {
			return res.status(404).json({
				success: 0,
				error: 1,
				message: 'Record not found.',
				data: [],
			});
		}
	} catch {
		return res.status(400).json({
			success: 0,
			message: 'Error in getting data.',
			error: 1,
			data: [],
		});
	}
};

// delete Shipping
// export const deleteShipping = async (req, res) => {
//   try {
//     const id = req.params.id

//     // Fetch the data to be deleted
//     const shipping = await Shipping.findOne({
//       where: {
//         id: id,
//       },
//     })

//     if (!shipping) {
//       return res.status(404).json({
//         success: 0,
//         error: 1,
//         message: `Shipping with ID ${id} not found.`,
//         data: [],
//       })
//     }

//     // Delete the data
//     await Shipping.destroy({
//       where: {
//         id: id,
//       },
//     })

//     // Return the deleted data in the response
//     return res.status(200).json({
//       success: 1,
//       error: 0,
//       message: `Shipping with ID ${id} deleted successfully.`,
//       data: shipping,
//     })
//   } catch {
//     return res.status(400).json({
//       success: 0,
//       message: 'Error in deleting data.........',
//       error: 1,
//       data: [],
//     })
//   }
// }

export const deleteShipping = async (req, res) => {
	try {
		const shop_name = req.headers['x-shop-name'];
		const id = req.params.id;

		// Fetch the data to be deleted
		const shipping = await Shipping.findOne({
			where: {
				id: id,
			},
		});

		if (!shipping) {
			return res.status(404).json({
				success: 0,
				error: 1,
				message: `Shipping with ID ${id} not found.`,
				data: [],
			});
		}

		// Check if shop_name matches
		if (shipping.shop_name !== shop_name) {
			return res.status(400).json({
				success: 0,
				error: 1,
				message: `Shop name does not match for Shipping with ID ${id}.`,
				data: [],
			});
		}

		// Delete the data
		await Shipping.destroy({
			where: {
				id: id,
			},
		});

		// Return the deleted data in the response
		return res.status(200).json({
			success: 1,
			error: 0,
			message: `Shipping with ID ${id} deleted successfully.`,
			data: shipping,
		});
	} catch {
		return res.status(400).json({
			success: 0,
			message: 'Error in deleting data.........',
			error: 1,
			data: [],
		});
	}
};

// update Shipping
// export const updateShipping = async (req, res) => {
//   try {
//     const id = req.params.id

//     // Check if the data exists
//     const shipping = await Shipping.findOne({
//       where: {
//         id: id,
//       },
//     })

//     if (!shipping) {
//       return res.status(404).json({
//         success: 0,
//         error: 1,
//         message: `Shipping with ID ${id} not found.`,
//         data: [],
//       })
//     }

//     let info = {
//       shop_name: req.body.shop_name,
//       name: req.body.name,
//       free_shipping_goal: req.body.free_shipping_goal,
//       message1: req.body.message1,
//       message2: req.body.message2,
//       message3: req.body.message3,
//       message4: req.body.message4,
//       message5: req.body.message5,
//       add_link_to_bar: req.body.add_link_to_bar,
//       link_URL: req.body.link_URL,
//       include_close_button: req.body.include_close_button,
//       add_progress_bar: req.body.add_progress_bar,
//       display_position: req.body.display_position,
//       currency: req.body.currency,
//       currency_symbol: req.body.currency_symbol,
//       currency_symbol_position: req.body.currency_symbol_position,
//       background_color: req.body.background_color,
//       text_color: req.body.text_color,
//       special_text_color: req.body.special_text_color,
//       background_color_opacity: req.body.background_color_opacity,
//       background_image: req.body.background_image,
//       font_family: req.body.font_family,
//       font_size: req.body.font_size,
//       bar_padding: req.body.bar_padding,
//       disappear_after: req.body.disappear_after,
//       delay_before_repeating: req.body.delay_before_repeating,
//       time_to_fade_in_out: req.body.time_to_fade_in_out,
//       display_on_page: req.body.display_on_page,
//       exclude_page: req.body.exclude_page,
//       device_target: req.body.device_target,
//       product_targeting: req.body.product_targeting,
//       shipping_fee_exceptions: req.body.shipping_fee_exceptions,
//       customer_targeting: req.body.customer_targeting,
//       geo_location_target: req.body.geo_location_target,
//       exclude_geo_location: req.body.exclude_geo_location,
//       display_schedule: req.body.display_schedule,
//       custom_code: req.body.custom_code,
//       is_activate: 1,
//       display_page_url: req.body.display_page_url,
//       display_page_keyword: req.body.display_page_keyword,
//       exclude_page_url: req.body.exclude_page_url,
//       exclude_page_keyword: req.body.exclude_page_keyword,
//     }

//     const updateShipping = await Shipping.update(info, {
//       where: {
//         id: id,
//       },
//     })

//     if (updateShipping[0]) {
//       return res.status(200).json({
//         success: 1,
//         error: 0,
//         message: `Shipping with ID ${id} updated successfully.`,
//         data: info,
//       })
//     } else {
//       return res.status(200).json({
//         success: 0,
//         error: 1,
//         message: 'Error in updating data.',
//         data: [],
//       })
//     }
//   } catch {
//     return res.status(400).json({
//       success: 0,
//       message: 'Error in updating data.........',
//       error: 1,
//       data: [],
//     })
//   }
// }

export const updateShipping = async (req, res) => {
	try {
		const shop_name = req.headers['x-shop-name'];
		const id = req.params.id;

		// Check if the data exists
		const shipping = await Shipping.findOne({
			where: {
				id: id,
			},
		});

		if (!shipping) {
			return res.status(404).json({
				success: 0,
				error: 1,
				message: `Shipping with ID ${id} not found.`,
				data: [],
			});
		}

		const existingShipping = await Shipping.findOne({
			where: {
				shop_name: shop_name,
				is_activate: 1, // Check if there is already an active shipping with the same shop_name
			},
		});

		let info = {
			shop_name: req.body.shop_name,
			name: req.body.name,
			free_shipping_goal: req.body.free_shipping_goal,
			message1: req.body.message1,
			message2: req.body.message2,
			message3: req.body.message3,
			message4: req.body.message4,
			message5: req.body.message5,
			add_link_to_bar: req.body.add_link_to_bar,
			link_URL: req.body.link_URL,
			include_close_button: req.body.include_close_button,
			add_progress_bar: req.body.add_progress_bar,
			display_position: req.body.display_position,
			currency: req.body.currency,
			currency_symbol: req.body.currency_symbol,
			currency_symbol_position: req.body.currency_symbol_position,
			background_color: req.body.background_color,
			text_color: req.body.text_color,
			special_text_color: req.body.special_text_color,
			background_color_opacity: req.body.background_color_opacity,
			background_image: req.body.background_image,
			font_family: req.body.font_family,
			font_size: req.body.font_size,
			bar_padding: req.body.bar_padding,
			disappear_after: req.body.disappear_after,
			delay_before_repeating: req.body.delay_before_repeating,
			time_to_fade_in_out: req.body.time_to_fade_in_out,
			display_on_page: req.body.display_on_page,
			exclude_page: req.body.exclude_page,
			device_target: req.body.device_target,
			product_targeting: req.body.product_targeting,
			shipping_fee_exceptions: req.body.shipping_fee_exceptions,
			customer_targeting: req.body.customer_targeting,
			geo_location_target: req.body.geo_location_target,
			exclude_geo_location: req.body.exclude_geo_location,
			display_schedule: req.body.display_schedule,
			custom_code: req.body.custom_code,
			is_activate: 1,
			display_page_url: req.body.display_page_url,
			display_page_keyword: req.body.display_page_keyword,
			exclude_page_url: req.body.exclude_page_url,
			exclude_page_keyword: req.body.exclude_page_keyword,
		};

		// Update the is_activate field of the existing shipping with the same shop_name
		if (existingShipping) {
			await Shipping.update(
				{
					is_activate: 0,
				},
				{
					where: {
						shop_name: req.body.shop_name,
					},
				}
			);
		}

		const updateShipping = await Shipping.update(info, {
			where: {
				id: id,
			},
		});

		if (updateShipping[0]) {
			return res.status(200).json({
				success: 1,
				error: 0,
				message: `Shipping with ID ${id} updated successfully.`,
				data: info,
			});
		} else {
			return res.status(200).json({
				success: 0,
				error: 1,
				message: 'Error in updating data.',
				data: [],
			});
		}
	} catch {
		return res.status(400).json({
			success: 0,
			message: 'Error in updating data.........',
			error: 1,
			data: [],
		});
	}
};

// isActive Shipping
export const isActive = async (req, res) => {
	try {
		const shop_name = req.headers['x-shop-name'];
		const id = req.params.id;

		const shipping_check = await Shipping.findOne({
			where: {
				shop_name: shop_name,
				id: id,
			},
		});

		// Check if the data exists
		const shipping = await Shipping.findAll({
			where: {
				shop_name: shop_name,
				is_activate: 1,
			},
		});

		if (shipping) {
			await Promise.all(
				shipping.map(async i => {
					await i.update({ is_activate: 0 });
				})
			);
		}

		const updateIsActive = await Shipping.findOne({
			where: {
				id: id,
			},
		});

		if (!updateIsActive) {
			return res.status(400).json({
				success: 0,
				error: 1,
				message: `No record found with ID ${id}`,
				data: null,
			});
		}

		if (shop_name === updateIsActive.shop_name) {
			console.log('==========', shipping_check.is_activate);
			if (shipping_check.is_activate === 1) {
				await updateIsActive.update({ is_activate: 0 });
			} else {
				await updateIsActive.update({ is_activate: 1 });
			}

			return res.status(200).json({
				success: 1,
				error: 0,
				message: `IsActive with ID ${id} updated successfully.`,
				data: updateIsActive,
			});
		} else {
			return res.status(400).json({
				success: 0,
				error: 1,
				message: `Shop Name does not match`,
				data: updateIsActive,
			});
		}
	} catch (error) {
		console.error(error);
		return res.status(400).json({
			success: 0,
			error: 1,
			message: 'Error in updating data',
			data: null,
		});
	}
};

// duplicate Shipping
export const getByIdAndDuplicate = async (req, res) => {
	try {
		const shop_name = req.headers['x-shop-name'];
		const id = req.params.id;

		const allShipping = await Shipping.findAll({
			where: {
				shop_name: shop_name,
			},
		});

		if (allShipping.length > 0) {
			// Update is_activate to 0 for the original record
			await Shipping.update(
				{ is_activate: 0 },
				{
					where: {
						shop_name: shop_name,
					},
				}
			);

			// Fetch the data by ID and shop_name
			const shipping = await Shipping.findOne({
				where: {
					id: id,
					shop_name: shop_name,
				},
			});

			// Create a duplicate of the data with is_activate set to 1
			const duplicatedShipping = await Shipping.create({
				shop_name: shipping.shop_name,
				name: shipping.name,
				free_shipping_goal: shipping.free_shipping_goal,
				message1: shipping.message1,
				message2: shipping.message2,
				message3: shipping.message3,
				message4: shipping.message4,
				message5: shipping.message5,
				add_link_to_bar: shipping.add_link_to_bar,
				link_URL: shipping.link_URL,
				include_close_button: shipping.include_close_button,
				add_progress_bar: shipping.add_progress_bar,
				display_position: shipping.display_position,
				currency: shipping.currency,
				currency_symbol: shipping.currency_symbol,
				currency_symbol_position: shipping.currency_symbol_position,
				background_color: shipping.background_color,
				text_color: shipping.text_color,
				special_text_color: shipping.special_text_color,
				background_color_opacity: shipping.background_color_opacity,
				background_image: shipping.background_image,
				font_family: shipping.font_family,
				font_size: shipping.font_size,
				bar_padding: shipping.bar_padding,
				disappear_after: shipping.disappear_after,
				delay_before_repeating: shipping.delay_before_repeating,
				time_to_fade_in_out: shipping.time_to_fade_in_out,
				display_on_page: shipping.display_on_page,
				exclude_page: shipping.exclude_page,
				device_target: shipping.device_target,
				product_targeting: shipping.product_targeting,
				shipping_fee_exceptions: shipping.shipping_fee_exceptions,
				customer_targeting: shipping.customer_targeting,
				geo_location_target: shipping.geo_location_target,
				exclude_geo_location: shipping.exclude_geo_location,
				display_schedule: shipping.display_schedule,
				custom_code: shipping.custom_code,
				display_page_url: shipping.display_page_url,
				display_page_keyword: shipping.display_page_keyword,
				exclude_page_url: shipping.exclude_page_url,
				exclude_page_keyword: shipping.exclude_page_keyword,
			});

			const getallShipping = await Shipping.findAll({
				where: {
					shop_name: shop_name,
				},
			});

			return res.status(200).json({
				success: 1,
				error: 0,
				message: `Record with ID ${id} and shop_name ${shop_name} found successfully, original record deactivated, and duplicate created.`,
				data: getallShipping,
			});
		} else {
			return res.status(404).json({
				success: 0,
				error: 1,
				message: 'Record not found.',
				data: [],
			});
		}
	} catch {
		return res.status(400).json({
			success: 0,
			message: 'Error in getting data.',
			error: 1,
			data: [],
		});
	}
};

// get isActive Shipping
export const getIsActive = async (req, res) => {
	const shop_name = req.headers['x-shop-name'];

	try {
		const getIsActive = await Shipping.findOne({
			where: {
				shop_name: shop_name,
				is_activate: 1,
			},
		});
		return res.status(200).json({
			success: 1,
			error: 0,
			message: `Record found successfully.`,
			data: getIsActive,
		});
	} catch (error) {
		return res.status(400).json({
			success: 0,
			message: 'Error in getting data.',
			error: 1,
			data: [],
		});
	}
};
