declare module 'wp-engine' {
  export interface WallpaperPropertyListener<T extends { [key: string]: WallpaperPropertyType } = { [key: string]: string }> {
    applyUserProperties(properties: WallpaperProperties<T>): void
    userDirectoryFilesAddedOrChanged?(propertyName: string, changedFiles: string[]): void

    userDirectoryFilesRemoved?(propertyName: string, removedFiles: string[]): void
  }
  export type WallpaperProperties<T extends { [key: string]: WallpaperPropertyType }> = { [key in keyof T]: WallpaperPropertyValue<T[key]> }

  export type WallpaperPropertyValue<T extends WallpaperPropertyType> = T extends 'combo' ? { value: WallpaperPropertyValueMap[T]; text: string } : { value: WallpaperPropertyValueMap[T] }

  type WallpaperPropertyValueMap = {
    color: `${number} ${number} ${number}`
    slider: number
    bool: boolean
    combo: string
    textinput: string
    file: string
    directory: string
  }
  export type WallpaperPropertyType = 'color' | 'slider' | 'bool' | 'combo' | 'textinput' | 'file' | 'directory'
}

declare interface Window {
  wallpaperPropertyListener: import('wp-engine').WallpaperPropertyListener
  wallpaperRequestRandomFileForProperty(property: string, cb: (propertyName: string, filePath: string) => void): void
}
