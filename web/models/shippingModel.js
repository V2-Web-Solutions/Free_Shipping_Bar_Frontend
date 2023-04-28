export const shippingModel = (sequelize, DataTypes) => {
  const Shipping = sequelize.define('shipping', {
    shop_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    free_shipping_goal: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    message1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message5: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    add_link_to_bar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link_URL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    include_close_button: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    add_progress_bar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    display_position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency_symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency_symbol_position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    background_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    special_text_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    background_color_opacity: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    font_family: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    font_size: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    bar_padding: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    disappear_after: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    delay_before_repeating: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    time_to_fade_in_out: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    display_on_page: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exclude_page: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    device_target: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_targeting: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipping_fee_exceptions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_targeting: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    geo_location_target: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exclude_geo_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    display_schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    custom_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_activate: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    display_page_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    display_page_keyword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exclude_page_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exclude_page_keyword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Shipping
}
