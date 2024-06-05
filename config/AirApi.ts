/**
 * # API兼容类
 * @author Hamm
 */
export class AirApi {
  /**
   * # 复制到剪切板
   * @param data 数据
   */
  static setClipboardData(data: string) {
    my.setClipboard({
      text: data
    })
  }

  /**
   * # 跳转到页面
   * @param path 路径
   */
  static navigateTo(path: string) {
    my.navigateTo({
      url: path,
    })
  }

  /**
   * # 停止下拉刷新
   */
  static stopPullDownRefresh() {
    my.stopPullDownRefresh()
  }

  /**
   * # 返回上一页
   * 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
   */
  static navigateBack(delta?: number) {
    my.navigateBack({
      delta,
    })
  }

  /**
   * # 隐藏返回首页按钮
   */
  static hideHomeButton() {
    my.hideBackHome()
  }

  /**
   * # 手机短震动
   */
  static vibrateShort() {
    my.vibrateShort()
  }

  /**
   * # 手机长震动
   */
  static vibrateLong() {
    my.vibrateLong()
  }

  /**
   * # 手机震动
   */
  static vibrate() {
    my.vibrate()
  }

  /**
   * # 替换到页面
   * @param path 路径
   */
  static redirect(path: string) {
    my.redirectTo({
      url: path
    })
  }

  /**
   * # 获取缓存的值
   * @param key 缓存的Key
   * @returns 缓存的值
   */
  public static getStorage(key: string): string {
    const value = my.getStorageSync({ key })
    return value ? value.toString() : ''
  }

  /**
   * # 设置缓存
   * @param key 缓存的Key
   * @param value 缓存的值
   */
  public static setStorage(key: string, value: string | number) {
    my.setStorageSync({ key: key, data: value.toString })
  }

  /**
   * # 移除缓存
   * @param key 缓存的Key
   */
  static removeStorage(key: string) {
    my.removeStorageSync({ key })
  }
}
