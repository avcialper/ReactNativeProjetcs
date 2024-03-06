import React from 'react'
import { View, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import useFetch from './hooks/useFetch'
import { API_URL } from '@env'
import Loading from './components/Loading'
import UserMarker from './components/marker/UserMarker'
import InfoCard from './components/InfoCard'

export default () => {

  const [user, setUser] = React.useState()
  const [infoModalVisible, setInfoModalVisible] = React.useState(false)

  const mapRef = React.useRef()

  const { data, loading, error } = useFetch(API_URL)

  const renderMarkers = () => {
    return (
      data.map(({ id, address: { coordinates }, avatar, first_name, last_name, username }) => {
        return (
          <UserMarker
            onClick={() => handleMarkerClick(coordinates, { first_name, last_name, username })}
            key={id}
            coordinates={{
              latitude: coordinates.lat,
              longitude: coordinates.lng
            }}
            userImageURL={avatar}
          />
        )
      })
    )
  }

  const handleMarkerClick = (coordinates, selectedUser) => {
    handleInfoModalVisible()
    setUser(selectedUser)
    mapRef.current.animateToRegion({
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      latitudeDelta: 10,
      longitudeDelta: 10,
    })
  }

  const handleInfoModalVisible = () => setInfoModalVisible(!infoModalVisible)

  return (
    <View>
      <MapView
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height
        }}
        ref={mapRef} >
        {data && renderMarkers()}
      </MapView>
      {loading && <Loading />}
      {user && <InfoCard
        visible={infoModalVisible}
        close={handleInfoModalVisible}
        user={user} />}
    </View>
  )
}